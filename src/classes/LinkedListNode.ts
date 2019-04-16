interface ILinkedListNode {
    data: any;
    next: ILinkedListNode;
}

export default class LinkedListNode implements ILinkedListNode {

    public data: any;
    public next: ILinkedListNode;
    
    constructor(data: any, next = null){
        this.data = data;
        this.next = next;
    }
}


