class Stock {
    constructor() {
        this.stocks = []
    }

    getStocks = () => {
        return this.stocks
    }

    createStock = (data) => {
        if (this.stocks.length === 0) {
            data.id = 1
        } else {
            data.id = this.stocks[this.stocks.length-1].id + 1
        }
        data.status = "Pendiente"
        this.stocks.push(data)
        return data
    }

    updateStocks = (data) => {
        let index = this.stocks.findIndex(item => item.id === data.id)
        if (index !== -1) {
            this.stocks[index].status = "Sold"
            return this.stocks[index]
        } else {
            throw new Error('No stock found')
        }
    }

    deleteStocks = () => {
        this.stocks = this.stocks.filter(item => item.status == "Available")
        return this.stocks
    }
}

const stock = new Stock()
export default stock