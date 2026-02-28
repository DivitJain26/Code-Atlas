# Code Atlas

### Getting Started

Follow these steps to run the project locally.

- Install Dependencies
```bash
npm install
```

- Start Development Server
```bash
npm run dev
```import sys

def can_transform(start, end):
    if len(start) != len(end):
        return False

    n = len(start)
    i = j = 0

    while i < n or j < n:

        while i < n and start[i] == 'X':
            i += 1
        while j < n and end[j] == 'X':
            j += 1

        if i == n and j == n:
            return True
        if i == n or j == n:
            return False

        if start[i] != end[j]:
            return False

        if start[i] == 'L' and i < j:
            return False
        if start[i] == 'R' and i > j:
            return False

        i += 1
        j += 1

    return True


data = sys.stdin.read().strip().split("\n")
start = data[0].strip()
end = data[1].strip()

print(str(can_transform(start, end)).lower())

The app should now be running in development mode.