import LinkedListNode from "./LinkedListNode";

export default class LinkedList {

    public root: LinkedListNode;
    public length: number;


    constructor(items: any[] = []){

        this.root = null;

        if(items.length > 0){
            for(let i = 0; i < items.length; i++){
                this.push(items[i]);
            }
        }

    }

    public push(data: any){

        if(this.root === null){
            this.root = new LinkedListNode(data);
            return;
        }

        let curNode = this.root;

        while(curNode.next !== null){

            curNode = curNode.next;

        }

        curNode.next = new LinkedListNode(data);
        this.length++;

    }

    public find(data: any): LinkedListNode | null{

        if(this.root === null) return;

        let curNode: LinkedListNode = this.root;

        while(curNode !== null){
            if(curNode.data === data) return curNode;

            curNode = curNode.next;
        }

        return null;

    }

    public remove(data: any): LinkedListNode{

        if(this.root === null) return;

        if(this.root.data === data){
            this.root = this.root.next;
            return;
        }
        
        let curNode: LinkedListNode = this.root.next;
        let prevNode: LinkedListNode = this.root;

        while(curNode !== null){

            if(curNode.data === data){
                prevNode.next = curNode.next;
                return curNode;
            }

            prevNode = curNode;
            curNode = curNode.next;

        }
    }

    public logData(){
        if(this.root === null) return;

        let curNode: LinkedListNode = this.root;

        while(curNode){
            console.log(curNode.data);
            curNode = curNode.next;
        }
    }

}