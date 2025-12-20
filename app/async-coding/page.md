### Pyramid of doom

```javascript
function loadUser(userId, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `/users/${userId}`);
  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(null, JSON.parse(xhr.responseText));
    } else {
      callback(new Error('Failed to load user'));
    }
  };
  xhr.onerror = () => callback(new Error('Network error'));
  xhr.send();
}

// Usage:
loadUser(42, (err, user) => {
  if (err) console.error(err);
  else console.log(user.name);
});
```

### Solution

```javascript
loadUser(42)
  .then(user => console.log(user.name))
  .catch(err => console.error(err));
```

