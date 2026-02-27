import { LanguageConfig } from '../types';

export const LANGUAGES: LanguageConfig[] = [
  {
    name: 'Python',
    value: 'python',
    monacoLanguage: 'python',
    icon: '🐍',
    defaultCode: `# Python Code Editor
def greet(name):
    return f"Hello, {name}!"

def main():
    print(greet("World"))
    print("Welcome to the Online Compiler!")

    # Example: Calculate factorial
    n = 5
    factorial = 1
    for i in range(1, n + 1):
        factorial *= i
    print(f"Factorial of {n} is {factorial}")

if __name__ == "__main__":
    main()
`,
  },
  {
    name: 'C++',
    value: 'cpp',
    monacoLanguage: 'cpp',
    icon: '⚡',
    defaultCode: `// C++ Code Editor
#include <iostream>
#include <string>
using namespace std;

string greet(string name) {
    return "Hello, " + name + "!";
}

int main() {
    cout << greet("World") << endl;
    cout << "Welcome to the Online Compiler!" << endl;

    // Example: Calculate factorial
    int n = 5;
    int factorial = 1;
    for (int i = 1; i <= n; i++) {
        factorial *= i;
    }
    cout << "Factorial of " << n << " is " << factorial << endl;

    return 0;
}
`,
  },
  {
    name: 'Java',
    value: 'java',
    monacoLanguage: 'java',
    icon: '☕',
    defaultCode: `// Java Code Editor
public class Main {
    public static String greet(String name) {
        return "Hello, " + name + "!";
    }

    public static void main(String[] args) {
        System.out.println(greet("World"));
        System.out.println("Welcome to the Online Compiler!");

        // Example: Calculate factorial
        int n = 5;
        int factorial = 1;
        for (int i = 1; i <= n; i++) {
            factorial *= i;
        }
        System.out.println("Factorial of " + n + " is " + factorial);
    }
}
`,
  },
];
