/** Node: node for a singly linked list. */

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if(this.head===null) this.head = newNode;
    if(this.tail !==null) this.tail.next = newNode;
    this.tail = newNode
    this.length += 1

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let current = this.head
    let newNode = new Node(val,current);
  
    if(this.tail === null) this.tail = newNode
    this.head = newNode 
    
    this.length +=1
  }

  /** pop(): return & remove last item. */

  pop() {
    let current = this.head
    let count = 0
    while(count >=this.length){
      current = current.next
      count +=1  
    }
      if(this.length>1){
      current.next.next = null
      this.tail = current
      this.length -=1
      return current.next.val
    }else if(this.length===1){
      current.next = null
      this.tail = null
      this.head=null
      this.length -=1
      return current.val
    }else if(this.length ===0){
      return current
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    let head = this.head
    this.head= null
    this.head = head.next
    this.length -= 1
    if(this.length<1){
      head.next = null
      this.head = null
      this.tail = null
    }
    return head.val

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let count = 0
    let current = this.head
    while(count<idx){
      current = current.next
      count +=1
    }
    return current.val

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let count = 0
    let current = this.head
    while(count < idx){
      current = current.next
      count += 1
    }
    current.val = val
    return current.val

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let count = 0
    let current = this.head
    let newNode = new Node(val)
   
     
   
    if(idx ===this.length){
      return this.push(val)}
    if(idx===0){
      return this.unshift(val)
    }
    while(count<idx-1){
      current = current.next
      count+=1
      this.length +=1
    }
    newNode.next = current.next
    current.next = newNode
    

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx === this.length-1){
      return this.pop()
    }
    if(idx===0)
      return this.shift()

  }

  /** average(): return an average of all values in the list */

  average() {
    let count = 0
    let sum = 0
    let current = this.head
    if(this.length===0) return 0
    while(count<this.length){
      sum += current.val
      count +=1
      current = current.next
    }
    return sum / this.length
    
  }
}

module.exports = LinkedList;
