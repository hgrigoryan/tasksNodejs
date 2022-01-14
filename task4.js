function List(){
    // if you run me without new
    // ...I will add new for you
    if (!new.target) {
        return new List(element); 
      }

    let head = null;
    let tail = null;
    this.length = 0;

    this.push = function(value){
        let node = new Node(value);
        if(this.length === 0){
            head = node;
            tail = node;
        } 
        else{
            head.next = node;
            node.prev = head;
            tail = node;
        }
        return ++this.length;
    } 

    this.pop = function(){
        if(this.length === 0){
            return;
        }
        deletedValue = tail.value;
        if(this.length === 1){
            // head & tail both are refered to the same object
            // so making one of them null & both will become null
            head = null;
        }
        else{
            tail.prev.next = null;
            tail = tail.prev;
        }

        this.length--;
        return deletedValue;
    }

    this.unshift = function(value){
        let node = new Node(value);
        if(this.length === 0){
            head = node;
            tail = node;
        } 
        else{
            head.prev = node;
            node.next = head;
            head = node;
        }
        return ++this.length;
    }

    this.shift = function(){
        if(this.length === 0){
            return;
        }
        deletedValue = head.value;
        if(this.length === 1){
            // head & tail both are refered to the same object
            // so making one of them null & both will become null
            head = null;
        }
        else{
            head.next.prev = null;
            head = head.next;
        }

        this.length--;
        return deletedValue;
    } 

    this.delete = function(value){
        if(this.length === 0){
            return;
        }

        if(this.length === 1){
            if(head.value !== value){
                return;
            }
            else{
                head = tail = null;
                return --this.length;
            }
        }
        

        let currentNode = head.next;
        for(let i = 0; i < this.length; ++i){
            console.log(i);
            if(currentNode.value === value){
                currentNode.prev.next = currentNode.next;
                currentNode.next.prev = currentNode.prev;
                break;
            } 
            currentNode = currentNode.next;
        }

        return --this.length;
    } 

    this.count = function(){
        return this.length;
    }
}

function Node(value){
    this.value = value;
    this.prev = null;
    this.next = null;
}

// testing
let list = new List();

console.log("***************Start logging**************\n");
console.log("Element number after first push: " + list.push(1));
console.log("Element number after second push: " + list.push(3));
console.log("******************************************");
console.log("First poped element: " + list.pop());
console.log("Second poped element: " + list.pop());
console.log("Third pop, list is empty: " + list.pop());
console.log("******************************************");
console.log("Element number after first unshift: " + list.unshift(1));
console.log("Element number after second unshift: " + list.unshift(2));
console.log("Element number after third unshift: " + list.unshift(3));
console.log("******************************************");
console.log("First shifted element: " + list.shift());
console.log("Second shifted element: " + list.shift());
console.log("Third shifted element: " + list.shift());
console.log("Third shifted, list is empty: " + list.shift());
console.log("******************************************");

for(let i = 1; i < 10; ++i){
    list.push(i);
}
console.log("Element count in the list after for loop is: " + list.count());
console.log("Deleting element with the value 6,\n Element count after delete: " + list.delete(6));
console.log("Lets shift whole list to see what remains there:");
/*for(let i = 1; i < 10; ++i){
    list.shift(i);
}
*/

