class Utilities {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function(event) {
            if (xhr.status !==200) {
                alert('Oops! Something went wrong.');
            }
            else {
                callback(JSON.parse(xhr.response));
            }
        }
        );
        xhr.addEventListener('error', function(event) {
            alert('Oops! Something went wrong.');
        });
        xhr.open('GET', url, true);
        xhr.send();
    }
}