function AuthToken(token) {
    const response = fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: { /* some data */ }
    });
}