
class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
    
    getNextNode() {
        return this.next;
    }
    
    getPrevNode() {
        return this.prev;
    }
    
    setNextNode(node) {
        this.next = node;
    }
    
    setPrevNode(node){
        this.prev = node;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    addToHead(data) {
        const newHead = new Node(data);
        const currentHead = this.head;
        this.head = newHead;
        if(currentHead){
            this.head.setNextNode(currentHead);
        }
    }
    
    addToTail(data) {
        let tail = this.head;
        if(!tail) {
            this.head = new Node(data);
        } else {
            while(tail.getNextNode() !== null) {
                tail = tail.getNextNode();
            }
            tail.setNextNode(new Node(data));
        }
    }
    
    removeHead() {
        let head = this.head;
        if(!head) {
            return null;
        } else {
            this.head = head.getNextNode();
            head.setNextNode(null);
        }
    }
    
    removeTail() {
        let tail = this.head;
        if(!tail){
            return null;
        } else {
            while(tail.getNextNode().getNextNode() !== null){
            tail = tail.getNextNode();
            }
            tail.setNextNode(null);
        }
    }
    
    printList() {
        let currentNode = this.head;
        let output = '<head> ';
        while(currentNode !== null){
            output += currentNode.data + ' ';
            currentNode = currentNode.getNextNode();
        }
        output += '<tail>';
        console.log(output);
    }
}

const createLinkedList = function() {
    let list = new LinkedList();
    list.addToHead(5);
    list.addToTail(6);
    list.addToTail(9);
    list.addToTail(10);
    list.addToTail(11);
    list.addToTail(12);
    list.removeTail(); 
     
    list.printList();
}

createLinkedList();