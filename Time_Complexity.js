// O(1)
const first = arr[0];

// O(n)
for (let i = 0; i < n; i++) console.log(arr[i]);

// O(n²)
for (let i = 0; i < n; i++)
  for (let j = 0; j < n; j++) console.log(i, j);

// O(log n)
for (let i = n; i > 1; i = Math.floor(i / 2)) console.log(i);