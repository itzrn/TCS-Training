package XploreRecording;

public class A001_JAVA {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
/*
JAVA is WORA -> Write once and run anywhere


-Java is Object Programming language as well as platform independent
-Java was developed by a team lead by James Gosling at Sun Microsystems
-Java is first language which provide the concept of writing that can be
 executed using the web.
-Java was released in 1995

Features of java
    -Compiled and Interpreted
    -Platform Independent and portable
    -Object oriented
    -Robust and Secure
    -Distributed
    -Familiar, simple and Small
    -Multithreaded and interactive
    -High performance
    -Dynamic and Extensible

Where is Java Used?
    -According to Oracle/Sun, 3 billion devices run java
    -There are many devices where java is currently used
    -Desktop Applications - Acrobat reader, Media Player, Antivirus etc.
    -Web Applications - www.irctc.co.in, www.javatpoint.com etc.
    -Enterprise Application - Banking Application, Business Application
    -Mobile
    -Embedded System
    -Games
    -Robotics

What is JVM?
    -Java Virtual Machine
    - JVM is a part of JRE
    - JVM + libraries = JRE
    - JVM is responsible to run the code and JRE is place where JVM run the code
    -JVM is the engine that drives the java code
    -Mostly in other Programming Languages, compiler produce code for a particular
     system but java compiler produce Bytecode for a Java Virtual machine.
    -WHen we compile a java program, then bytecode is generated. Bytecode is the
     source code that can be used to run on any platform.
    -Bytecode is an intermediary language between java source and the host system.
    -It is the medium which compile java code to bytecode which gets interpreted
     on a different machine and hence it makes it platform/operating system independent.

How JVM Work? JVM is need to be built for particular OS(so JVM is not platform independent)
    - JVM says, i will run your code but only if it is Bytecode
    - Firstly code get compile by java compiler(javac) and converts the code
      into Bytecode.
    - Then Jvm can read the ByteCode
    - There can be 1000 of files but there will only be one file that JVM will execute and
      that file is the Main file which contains the main function.
      (.class is a byte code file)
    - As Developer need to have JDK (JDK[JRE[JVM]]), so javac is just only for
      development purpose
    - But a normal person can just have JRE to run the code

How Java is Platform Independent?
    Java is considered platform independent because the code written in Java is compiled
    into an intermediary form called bytecode. This bytecode is not specific to any
    particular operating system or hardware. The compiled bytecode is then executed by
    the Java Virtual Machine (JVM), which is available for different platforms.

    Here's how it works:
    - A developer writes a Java program and compiles it using the Java compiler (`javac`).
      This compilation step generates a `.class` file containing the platform-independent
      bytecode.
    - The bytecode can then be executed on any machine that has a JVM implemented for
      its operating system. The JVM interprets or converts this bytecode into
      machine-specific instructions at runtime.
    - Since the JVM implementations exist for a wide variety of operating systems (Windows,
      Linux, macOS, etc.), the same bytecode can run on any of these systems without 
      modification, making Java platform independent.

    It's important to note that the JVM itself is not platform independent—it must be 
    specifically built for each platform. However, the logic of bytecode execution 
    through the JVM ensures the "Write Once, Run Anywhere" (WORA) principle in practice.

Java Runtime Environment(JRE) components:
    - Java Web Start and Java Plug-in
    - User Interface toolkit, which includes abstract window toolkit (AWT), Swing, Image I/O,
      accessibility, drag and drop, etc.
    - Other different base libraries, including I/O, extension mechanisms, beans, LMX, JNI,
      networking, override mechanisms, etc.
    - Lang and util base libraries which include lang and util, management, versioning,
      Collections, etc.
    - Integration libraries, which includes Interface Definition language (IDL), Java
      Database Connectivity (JDBC), Java Naming and Directory Interface (JNDI), Remote method
      Invocations(RMI).
 
Difference between JDK, JRE and JVM
    - JDK (Java Development Kit): It is a software development kit used for creating Java
      applications. It includes tools such as a compiler (javac), an interpreter (java),
      a debugger, and other utilities required for Java development. It also includes the JRE.
    - JRE (Java Runtime Environment): It is a subset of JDK, meant for running Java
      applications. It includes the JVM and essential Java libraries but does not
      include development tools such as a compiler.
    - JVM (Java Virtual Machine): It is a part of the JRE. The JVM interprets the bytecode
      and converts it into machine-specific instructions, allowing the program to run on
      any device with the corresponding JVM for its platform.


Class
A class is a blueprint which do not have any physical existence.
The physical existence of class is called object.

When an object is created then it get the memory in heap area.
The reference variable refers to the object allocated in the heap memory area.
So reference store the memory address of object get created in heap.

The reference is created in stack memory.

 */
