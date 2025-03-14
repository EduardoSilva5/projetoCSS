document.getElementById('messageButton').addEventListener('click', function() {
    var messageParagraph = document.getElementById('message');
    if (messageParagraph.classList.contains('hidden')) {
        messageParagraph.classList.remove('hidden');
    } else {
        messageParagraph.classList.add('hidden');
    }
});
