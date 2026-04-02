import { LanguageConfig } from '../types';

export const LANGUAGES: LanguageConfig[] = [
  {
    name: 'Python',
    value: 'python',
    monacoLanguage: 'python',
    icon: '🐍',
    defaultCode: `# Hello World in Python
print("Hello, World!")

# Try modifying this code and click "Run Code"
name = input("Enter your name: ")
print(f"Hello, {name}! Welcome to CodeRunner 🚀")
`,
  },
  {
    name: 'C++',
    value: 'cpp',
    monacoLanguage: 'cpp',
    icon: '⚡',
    defaultCode: `// Hello World in C++
#include <iostream>
#include <string>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    
    string name;
    cout << "Enter your name: ";
    getline(cin, name);
    cout << "Hello, " << name << "! Welcome to CodeRunner 🚀" << endl;
    
    return 0;
}
`,
  },
  {
    name: 'Java',
    value: 'java',
    monacoLanguage: 'java',
    icon: '☕',
    defaultCode: `// Hello World in Java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
        
        // Note: Java input support will be added later
        System.out.println("Welcome to CodeRunner 🚀");
    }
}
`,
  },
];