// codeSnippets.js

const codeSnippets = [
    `// Example 1
public class Main {
   public Main() {
   }

   public static void main(String[] var0) {
      LL var1 = new LL();
      var1.insertAtFirstPosition(3);
      var1.insertAtFirstPosition(4);
      var1.insertAtFirstPosition(5);
      var1.insertAtFirstPosition(17);
      var1.insertAtFirstPosition(20);
      var1.display();
      System.out.println("the element found at " + var1.findElement(5) + " position");
      var1.insertAtLastPosition(99);
      var1.display();
      var1.insertAtIndex(50, 3);
      var1.display();
      var1.deleteAtFirst();
      var1.display();
      System.out.println(var1.deleteAtFirst());
      var1.deleteAtLast();
      var1.display();
      System.out.println(var1.deleteAtLast());
      var1.display();
      var1.deleteAtIndex(3);
      var1.display();
      System.out.println(var1.deleteAtIndex(2));
   }
}


public class LL {
 
    
        private Node head;
        private Node tail;
        private int size;
    
        public LL() {
            this.size = 0;
        }
    
        public void insertAtFirstPosition(int val)
         {
            Node node = new Node(val);
            node.next = head;
            head = node;
    
            if (tail == null) {
                tail = head;
            }
    
            size = size + 1;
        }

        public void insertAtLastPosition(int val)
        {
            if(tail==null)
            {
                insertAtFirstPosition(val);
                return;
            }
            Node node = new Node(val);
            tail.next=node;
            tail=node;
            size++;

        }
        public void insertAtIndex(int val,int index)
        {
            if(index==0)
            {
                insertAtFirstPosition(val);
                return;
            }
            else if(index==size)
            {
                insertAtLastPosition(val);
                return;

            }
            Node temp=head;
            
            for(int i=1;i<index;i++)
            {
                temp=temp.next;
          
            }
            Node node=new Node(val,temp.next);
            temp.next=node;
            size++;
        }
        public int deleteAtFirst()
        {
            int deletedvalue=head.val;
            head=head.next;
            if(head.next==null)
            {
                tail.next=null;
            }
            size--;
            return deletedvalue;
        }
        public int deleteAtLast()
        {
            int delvalue;
            if(head.next==null)
            {
                tail=head;
                delvalue=tail.val;
                tail=head=null;
            }
             delvalue=tail.val;
            Node temp;
            temp=head;
            while ((temp.next!=tail)) {
                temp=temp.next;
            }
            tail=temp;
            tail.next=null;
            size--;
            return delvalue;
        }
        public int deleteAtIndex(int index) {
            int del;
          
            if (index == 0) {
                return deleteAtFirst();
            } else if (index == size - 1) {
                return deleteAtLast();
            }
        
            Node temp = head;
            
            for (int i = 1; i < index-1; i++) {
                temp = temp.next;
            }
            
            del = temp.next.val;
            temp.next = temp.next.next;
            size--;
            return del;
        }

        public int findElement(int element)
        {
           Node temp=head;
           int index=0;
           while (temp.val!=element) {
                temp=temp.next;
                index++;
           }
           return index;
        }
        
        public void display() {
            Node temp = head;
            while (temp != null) {
                System.out.print(temp.val + " -> ");
                temp = temp.next;
            }
            System.out.println("End");
        }
    
        private class Node {
            private int val;
            private Node next;
    
            private Node(int val) {
                this.val = val;
            }
    
            private Node(int val, Node next) {
                this.val = val;
                this.next = next;
            }
        }
    }
    



`,
    
    `// Example 2
  import java.util.Scanner;

class BinaryTree{
    public BinaryTree()
    {

    }

    private static class Node {
        
        int value;
        Node left;
        Node right;

        public Node(int value)
        {
            this.value=value;
        }
        
    }

    private Node root;

    public void populate(Scanner scanner)
    {
        System.out.println("Enter the root node : ");
        int value= scanner.nextInt();
        root = new Node(value);
        populate(scanner,root);
    }

    public void populate(Scanner scanner,Node node)
    {
        System.out.println("Do you want to enter at the left of "+node.value);
        boolean left=scanner.nextBoolean();
        if(left)
        {

            System.out.println("Enter the value at the left of "+node.value);
            int value=scanner.nextInt();
            node.left=new Node(value);
            populate(scanner,node.left);
        }
        System.out.println("Do you want to enter at the right of "+node.value);
        boolean right=scanner.nextBoolean();
        if(right)
        {

            System.out.println("Enter the value at the right of "+node.value);
            int value=scanner.nextInt();
            node.right=new Node(value);
            populate(scanner,node.right);
        }
    }
    public void diplay()
    {
        diplay(this.root," ");
    }
   public void diplay(Node node,String indent)
    { 
        if(node==null)
        {
            return;
        }
        System.out.println(indent+ node.value);
        diplay(node.left,indent +"\t");
        diplay(node.right, indent +"\t");
    }
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);
        BinaryTree tree=new BinaryTree();
        tree.populate(scanner);
        tree.diplay();
    }

}`,
    

`
import java.util.*;

public class ArrayListDemo {
    public static void main(String[] args) {
        // Create an ArrayList
        List<String> arrayList = new ArrayList<>();




        
        // 1. Add elements to ArrayList
        arrayList.add("Apple");
        arrayList.add("Banana");
        arrayList.add("Cherry");
        System.out.println("ArrayList after adding elements: " + arrayList);

        // 2. Add element at a specific index
        arrayList.add(1, "Date");
        System.out.println("ArrayList after adding 'Date' at index 1: " + arrayList);

        // 3. Remove element by index
        arrayList.remove(2);
        System.out.println("ArrayList after removing element at index 2: " + arrayList);

        // 4. Remove element by value
        arrayList.remove("Banana");
        System.out.println("ArrayList after removing 'Banana': " + arrayList);

        // 5. Get element at a specific index
        String elementAt1 = arrayList.get(1);
        System.out.println("Element at index 1: " + elementAt1);

        // 6. Update element at a specific index
        arrayList.set(1, "Elderberry");
        System.out.println("ArrayList after updating index 1 with 'Elderberry': " + arrayList);

        // 7. Check if the ArrayList contains an element
        boolean containsApple = arrayList.contains("Apple");
        System.out.println("Does the ArrayList contain 'Apple'? " + containsApple);

        // 8. Find the index of an element
        int indexOfCherry = arrayList.indexOf("Cherry");
        System.out.println("Index of 'Cherry': " + indexOfCherry);

        // 9. Find the size of the ArrayList
        int size = arrayList.size();
        System.out.println("Size of the ArrayList: " + size);

        // 10. Sort the ArrayList
        Collections.sort(arrayList);
        System.out.println("ArrayList after sorting: " + arrayList);

        // 11. Iterate over the ArrayList (using for-each loop)
        System.out.print("ArrayList elements using for-each loop: ");
        for (String fruit : arrayList) {
            System.out.print(fruit + " ");
        }
        System.out.println();

        // 12. Clear the ArrayList
        arrayList.clear();
        System.out.println("ArrayList after clear: " + arrayList);

        // 13. Check if the ArrayList is empty
        boolean isEmpty = arrayList.isEmpty();
        System.out.println("Is the ArrayList empty? " + isEmpty);
    }
}

`,
`
import java.util.*;

public class LinkedListDemo {
    public static void main(String[] args) {
        // Create a LinkedList
        LinkedList<String> linkedList = new LinkedList<>();

        // 1. Add elements to LinkedList
        linkedList.add("Apple");
        linkedList.add("Banana");
        linkedList.add("Cherry");
        System.out.println("LinkedList after adding elements: " + linkedList);



        // 2. Add element at a specific index
        linkedList.add(1, "Date");
        System.out.println("LinkedList after adding 'Date' at index 1: " + linkedList);




        // 3. Add elements to the beginning and end
        linkedList.addFirst("Mango");
        linkedList.addLast("Pineapple");
        System.out.println("LinkedList after adding 'Mango' at beginning and 'Pineapple' at end: " + linkedList);







        // 4. Remove element by index
        linkedList.remove(2);
        System.out.println("LinkedList after removing element at index 2: " + linkedList);








        // 5. Remove element by value
        linkedList.remove("Banana");
        System.out.println("LinkedList after removing 'Banana': " + linkedList);




        // 6. Remove the first and last element
        linkedList.removeFirst();
        linkedList.removeLast();
        System.out.println("LinkedList after removing first and last elements: " + linkedList);





        // 7. Get element at a specific index
        String elementAt1 = linkedList.get(1);
        System.out.println("Element at index 1: " + elementAt1);







        // 8. Update element at a specific index
        linkedList.set(1, "Elderberry");
        System.out.println("LinkedList after updating index 1 with 'Elderberry': " + linkedList);









        // 9. Check if the LinkedList contains an element
        boolean containsApple = linkedList.contains("Apple");
        System.out.println("Does the LinkedList contain 'Apple'? " + containsApple);






        // 10. Find the index of an element
        int indexOfCherry = linkedList.indexOf("Cherry");
        System.out.println("Index of 'Cherry': " + indexOfCherry);







        // 11. Find the size of the LinkedList
        int size = linkedList.size();
        System.out.println("Size of the LinkedList: " + size);








        // 12. Sort the LinkedList
        Collections.sort(linkedList);
        System.out.println("LinkedList after sorting: " + linkedList);





        // 13. Iterate over the LinkedList (using for-each loop)
        System.out.print("LinkedList elements using for-each loop: ");
        for (String fruit : linkedList) {
            System.out.print(fruit + " ");
        }
        System.out.println();





        // 14. Convert LinkedList to Array
        String[] array = linkedList.toArray(new String[0]);
        System.out.print("Array converted from LinkedList: ");
        for (String fruit : array) {
            System.out.print(fruit + " ");
        }
        System.out.println();







        // 15. Peek at the first element without removing it
        String firstElement = linkedList.peek();
        System.out.println("First element using peek(): " + firstElement);





        // 16. Poll the first element (retrieve and remove)
        String polledElement = linkedList.poll();
        System.out.println("First element polled (removed): " + polledElement);
        System.out.println("LinkedList after poll(): " + linkedList);







        // 17. Clear the LinkedList
        linkedList.clear();
        System.out.println("LinkedList after clear(): " + linkedList);




        
        // 18. Check if the LinkedList is empty
        boolean isEmpty = linkedList.isEmpty();
        System.out.println("Is the LinkedList empty? " + isEmpty);
    }
}
`,
`
import java.util.HashMap;
import java.util.Map;

public class HashMapDemo {
    public static void main(String[] args) {
        // Create a HashMap
        HashMap<Integer, String> hashMap = new HashMap<>();

        // 1. Add key-value pairs to the HashMap
        hashMap.put(1, "Apple");
        hashMap.put(2, "Banana");
        hashMap.put(3, "Cherry");
        System.out.println("HashMap after adding elements: " + hashMap);

        // 2. Add a duplicate key with a new value (it will replace the old value)
        hashMap.put(1, "Apricot");
        System.out.println("HashMap after replacing value for key 1: " + hashMap);

        // 3. Get value by key
        String value = hashMap.get(2);
        System.out.println("Value for key 2: " + value);

        // 4. Remove an entry by key
        hashMap.remove(2);
        System.out.println("HashMap after removing key 2: " + hashMap);

        // 5. Check if a key exists in the HashMap
        boolean containsKey = hashMap.containsKey(3);
        System.out.println("Does the HashMap contain key 3? " + containsKey);

        // 6. Check if a value exists in the HashMap
        boolean containsValue = hashMap.containsValue("Cherry");
        System.out.println("Does the HashMap contain value 'Cherry'? " + containsValue);

        // 7. Find the size of the HashMap
        int size = hashMap.size();
        System.out.println("Size of the HashMap: " + size);

        // 8. Iterate over the HashMap using entrySet
        System.out.println("Iterating over HashMap using entrySet: ");
        for (Map.Entry<Integer, String> entry : hashMap.entrySet()) {
            System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
        }

        // 9. Iterate over the keys
        System.out.println("Iterating over keys of HashMap: ");
        for (Integer key : hashMap.keySet()) {
            System.out.println("Key: " + key);
        }

        // 10. Iterate over the values
        System.out.println("Iterating over values of HashMap: ");
        for (String val : hashMap.values()) {
            System.out.println("Value: " + val);
        }

        // 11. Replace a value for a specific key
        hashMap.replace(3, "Citrus");
        System.out.println("HashMap after replacing value for key 3: " + hashMap);

        // 12. Check if HashMap is empty
        boolean isEmpty = hashMap.isEmpty();
        System.out.println("Is the HashMap empty? " + isEmpty);

        // 13. Clear the HashMap
        hashMap.clear();
        System.out.println("HashMap after clear(): " + hashMap);

        // 14. Check again if HashMap is empty after clearing
        isEmpty = hashMap.isEmpty();
        System.out.println("Is the HashMap empty after clear()? " + isEmpty);
    }
}
`,
`import java.util.HashSet;
import java.util.Iterator;

public class HashSetDemo {
    public static void main(String[] args) {
        // Create a HashSet
        HashSet<String> hashSet = new HashSet<>();

        // 1. Add elements to the HashSet
        hashSet.add("Apple");
        hashSet.add("Banana");
        hashSet.add("Cherry");
        System.out.println("HashSet after adding elements: " + hashSet);





        // 2. Add duplicate element (HashSet doesn't allow duplicates)
        boolean added = hashSet.add("Apple");
        System.out.println("Trying to add duplicate 'Apple': " + added);
        System.out.println("HashSet after trying to add duplicate: " + hashSet);






        // 3. Remove an element by value
        hashSet.remove("Banana");
        System.out.println("HashSet after removing 'Banana': " + hashSet);





        // 4. Check if the HashSet contains a specific element
        boolean containsCherry = hashSet.contains("Cherry");
        System.out.println("Does the HashSet contain 'Cherry'? " + containsCherry);






        // 5. Find the size of the HashSet
        int size = hashSet.size();
        System.out.println("Size of the HashSet: " + size);






        // 6. Iterate over the HashSet using an Iterator
        System.out.print("Iterating over HashSet using Iterator: ");
        Iterator<String> iterator = hashSet.iterator();
        while (iterator.hasNext()) {
            System.out.print(iterator.next() + " ");
        }
        System.out.println();







        // 7. Check if HashSet is empty
        boolean isEmpty = hashSet.isEmpty();
        System.out.println("Is the HashSet empty? " + isEmpty);






        // 8. Clear all elements from HashSet
        hashSet.clear();
        System.out.println("HashSet after clear(): " + hashSet);





        
        // 9. Check again if HashSet is empty after clearing
        isEmpty = hashSet.isEmpty();
        System.out.println("Is the HashSet empty after clear()? " + isEmpty);
    }
}
`,
`import java.util.TreeMap;
import java.util.Map;

public class TreeMapDemo {
    public static void main(String[] args) {
        // Create a TreeMap
        TreeMap<Integer, String> treeMap = new TreeMap<>();

        // 1. Add key-value pairs to TreeMap (TreeMap sorts keys in ascending order)
        treeMap.put(3, "Banana");
        treeMap.put(1, "Apple");
        treeMap.put(2, "Cherry");
        treeMap.put(4, "Date");
        System.out.println("TreeMap after adding elements: " + treeMap);

        // 2. Add a duplicate key with a new value (it will replace the old value)
        treeMap.put(1, "Apricot");
        System.out.println("TreeMap after replacing value for key 1: " + treeMap);

        // 3. Get value by key
        String value = treeMap.get(2);
        System.out.println("Value for key 2: " + value);

        // 4. Remove an entry by key
        treeMap.remove(3);
        System.out.println("TreeMap after removing key 3: " + treeMap);

        // 5. Check if the TreeMap contains a specific key
        boolean containsKey = treeMap.containsKey(4);
        System.out.println("Does the TreeMap contain key 4? " + containsKey);

        // 6. Check if the TreeMap contains a specific value
        boolean containsValue = treeMap.containsValue("Cherry");
        System.out.println("Does the TreeMap contain value 'Cherry'? " + containsValue);

        // 7. Find the size of the TreeMap
        int size = treeMap.size();
        System.out.println("Size of the TreeMap: " + size);

        // 8. Get the first and last keys in the TreeMap
        int firstKey = treeMap.firstKey();
        int lastKey = treeMap.lastKey();
        System.out.println("First key: " + firstKey);
        System.out.println("Last key: " + lastKey);

        // 9. Iterate over the TreeMap using entrySet
        System.out.println("Iterating over TreeMap using entrySet: ");
        for (Map.Entry<Integer, String> entry : treeMap.entrySet()) {
            System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
        }

        // 10. Get a subset of the TreeMap (headMap, tailMap, and subMap)
        System.out.println("SubMap (keys between 1 and 4): " + treeMap.subMap(1, 4));
        System.out.println("HeadMap (keys less than 3): " + treeMap.headMap(3));
        System.out.println("TailMap (keys greater than or equal to 2): " + treeMap.tailMap(2));

        // 11. Get the closest lower and higher keys (floor, ceiling, lower, higher)
        System.out.println("Closest key less than or equal to 2: " + treeMap.floorKey(2));
        System.out.println("Closest key greater than or equal to 2: " + treeMap.ceilingKey(2));
        System.out.println("Closest key strictly less than 2: " + treeMap.lowerKey(2));
        System.out.println("Closest key strictly greater than 2: " + treeMap.higherKey(2));

        // 12. Poll first and last entries (retrieve and remove)
        Map.Entry<Integer, String> firstEntry = treeMap.pollFirstEntry();
        System.out.println("Polled first entry: " + firstEntry);
        Map.Entry<Integer, String> lastEntry = treeMap.pollLastEntry();
        System.out.println("Polled last entry: " + lastEntry);
        System.out.println("TreeMap after polling first and last entries: " + treeMap);

        // 13. Clear the TreeMap
        treeMap.clear();
        System.out.println("TreeMap after clear(): " + treeMap);

        // 14. Check if the TreeMap is empty
        boolean isEmpty = treeMap.isEmpty();
        System.out.println("Is the TreeMap empty? " + isEmpty);
    }
}
`,
`
import java.util.TreeSet;
import java.util.Iterator;

public class TreeSetDemo {
    public static void main(String[] args) {
        // Create a TreeSet
        TreeSet<String> treeSet = new TreeSet<>();




        // 1. Add elements to TreeSet (TreeSet sorts the elements automatically)
        treeSet.add("Apple");
        treeSet.add("Banana");
        treeSet.add("Cherry");
        System.out.println("TreeSet after adding elements: " + treeSet);





        // 2. Add duplicate element (TreeSet does not allow duplicates)
        boolean added = treeSet.add("Apple");
        System.out.println("Trying to add duplicate 'Apple': " + added);
        System.out.println("TreeSet after trying to add duplicate: " + treeSet);




        // 3. Remove an element by value
        treeSet.remove("Banana");
        System.out.println("TreeSet after removing 'Banana': " + treeSet);





        // 4. Check if the TreeSet contains a specific element
        boolean containsCherry = treeSet.contains("Cherry");
        System.out.println("Does the TreeSet contain 'Cherry'? " + containsCherry);





        // 5. Find the size of the TreeSet
        int size = treeSet.size();
        System.out.println("Size of the TreeSet: " + size);




        // 6. Get the first and last elements in the TreeSet
        String firstElement = treeSet.first();
        String lastElement = treeSet.last();
        System.out.println("First element: " + firstElement);
        System.out.println("Last element: " + lastElement);





        // 7. Iterate over the TreeSet using an Iterator
        System.out.print("Iterating over TreeSet using Iterator: ");
        Iterator<String> iterator = treeSet.iterator();
        while (iterator.hasNext()) {
            System.out.print(iterator.next() + " ");
        }
        System.out.println();





        // 8. Get elements less than a given element (headSet)
        TreeSet<String> headSet = (TreeSet<String>) treeSet.headSet("Cherry");
        System.out.println("Elements less than 'Cherry': " + headSet);







        // 9. Get elements greater than or equal to a given element (tailSet)
        TreeSet<String> tailSet = (TreeSet<String>) treeSet.tailSet("Cherry");
        System.out.println("Elements greater than or equal to 'Cherry': " + tailSet);





        // 10. Get a subset of elements between two elements
        TreeSet<String> subSet = (TreeSet<String>) treeSet.subSet("Apple", "Cherry");
        System.out.println("Subset between 'Apple' and 'Cherry': " + subSet);








        // 11. Poll first and last elements (retrieves and removes)
        String polledFirst = treeSet.pollFirst();
        String polledLast = treeSet.pollLast();
        System.out.println("Polled first element: " + polledFirst);
        System.out.println("Polled last element: " + polledLast);
        System.out.println("TreeSet after polling first and last elements: " + treeSet);





        // 12. Clear all elements from TreeSet
        treeSet.clear();
        System.out.println("TreeSet after clear(): " + treeSet);





        
        // 13. Check if TreeSet is empty
        boolean isEmpty = treeSet.isEmpty();
        System.out.println("Is the TreeSet empty? " + isEmpty);
    }
}
`,

  ];
  
  export default codeSnippets;
  