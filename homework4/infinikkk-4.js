class PaginationHelper {
    collection;
    itemsPerPage;
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }
    itemCount() {
        return this.collection.length;
    }
    pageCount() {
        return Math.ceil(this.itemCount()/this.itemsPerPage)
    }
    pageItemCount(pageIndex) {
        if (pageIndex > this.pageCount()-1 || pageIndex < 0) return -1;
        let pageItemCount = (pageIndex === this.pageCount()-1) ? (this.itemCount() % this.itemsPerPage) : this.itemsPerPage;
        return pageItemCount || this.itemsPerPage;
    }
    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex > this.itemCount()-1) return -1;
        return Math.floor(itemIndex/this.pageItemCount(0))
    }
}