# tasksNodejs
This repository includes all taskes done during ACA node.js course.


**task1: Implement map and slice functions**<br/>
Description:<br/> 
  Write map and slice functions that work like Array.map and Array.slice functions.

**task2: Flatten an array**<br/>
Description:<br/>
  Write a program to flatten an array.<br/>
  Note: Don't use Array.flat function.<br/>

  Example:<br/> 
  const array = [1,[2,3,[4]],[[5,6],7]];<br/>
  const flatArray = [1,2,3,4,5,6,7];<br/>
  
**task3: Object keys**<br/>
Description:<br/>
  Write a JavaScript function to get a copy of the object where the keys have 
  become the values and the values the keys (objects have string, number 
  values or another object with string and number values).<br/>
  Note: Values are unique.<br/>
   Example:<br/>
   const obj = {<br/>
     name: "Jhon",<br/>
     country: {<br/>
      name: "Armenia",<br/>
      code: 374<br/>
     }<br/>
   };<br/>
   
   const reverseObj = reverse(obj);<br/>
   //<br/>
   ...<br/>
   reverseObj = {<br/>
     Jhon: "name",<br/>
     country: {<br/>
       Armenia: "name",<br/>
       374: "code"<br/>
     }<br/>
   }<br/>
    
**task4: Doubly linked list**<br/>
Description:<br/>
  Implement a Node to hold a value and pointers to the next and previous nodes. 
  Then implement a List which holds references to the first and last node and 
  offers an array-like interface for adding and removing items:<br/>
    push ();<br/>
    pop ();<br/>
    shift ();<br/>
    unshift ();<br/>
    Your list must also implement the following interface:<br/>
    delete (delete the first occurrence of a specified value)<br/>
    count (count the number of items in the list)<br/>
  Don't  use a library to implement this exercise. Don't  use a backing array to
  implement this exercise.<br/>

  Example: <br/>
  const List = new List();<br/>
  List.push(6);<br/>
  List.count() === 1<br/>
  const item = List.shift();<br/>
  item === 6<br/>
  
**task5: Avengers**<br/>
Description:<br/>
  Create 2 arrays: heroes and villains.<br/>
  Fill those arrays with 10 characters(objects) with these properties:<br/>
    name: somehow generate a random name,<br/>
    speed: random number from 1 to 5, 1 means 5 seconds and 5 means the 1-second
           interval between each attack<br/>
    health: equal to 100<br/>
    power: random number from 1 to 10,<br/>

  Villains and heroes will attack each other.<br/>

  All characters start to attack at the same time(first can start villains).
  Each character hits a random enemy on his turn and the enemy's health 
  decreases by the amount of the character's power. When a character dies 
  he/she are removed from the array.<br/>
  Every character makes his next attack after (1/speed * 5 ) seconds.<br/>

  Write a program to emulate the battle.<br/>
  Each Attack should be logged.<br/>
  Example:<br/>
  Thor[90] hits Thanos[100]  with a power of 4.6<br/>
  Iron-Man dies<br/>


  At the end of the battle log which team won and stayed characters' health.<br/>
  Example:<br/>
  Heroes win<br/>
  [Black-Widow[10]  Spider-Man[20] Dr.Strange[5]]<br/>
  
  
