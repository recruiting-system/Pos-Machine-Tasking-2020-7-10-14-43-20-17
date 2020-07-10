const main = require('../main');

describe('print receipt', () => {
    it('should print receipt to console correctly when print receipt given multiple barcodes',
        () => {
            let barcodes = ['0001', '0003', '0005', '0003'];

            console.log = jest.fn();

            main.printReceipt(barcodes);

            expect(console.log).toHaveBeenCalledWith(
                'Receipts\n'
                + '------------------------------------------------------------\n'
                + 'Coca Cola    3   1\n'
                + 'Pepsi-Cola   5   2\n'
                + 'Dr Pepper    7   1\n'
                + '------------------------------------------------------------\n'
                + 'Price: 20');
        });
});
