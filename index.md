---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
---

##### Java

```java
int total = 0;
for(int i = 0; i < list.length; i++)
{	total += list[i];
System.out.println( list[i] );
}
return total;
```

##### Scala

```scala
  def findNums(n: Int): Iterable[(Int, Int)] = {

    // a for comprehension using two generators
    for (i <- 1 until n;
         j <- 1 until (i-1);
         if isPrime(i + j)) yield (i, j)
  }
```

##### C++
```c++
#include <iostream>
using namespace std;

int main() 
{    
    cout << "Size of char: " << sizeof(char) << " byte" << endl;
    cout << "Size of int: " << sizeof(int) << " bytes" << endl;
    cout << "Size of float: " << sizeof(float) << " bytes" << endl;
    cout << "Size of double: " << sizeof(double) << " bytes" << endl;

    return 0;
}
```