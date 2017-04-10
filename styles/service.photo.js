'use strict'

(function() {

    var service = {
        root: 'https://jsonplaceholder.typicode.com',
        getPhoto: getPosts,
        createPost: createPost
    };

    function getPosts(postId) {
        return $.ajax({
            type: 'GET',
            dataType: 'json',
            url: this.root + '/Photo/' + postId
        });
    }

    function createPost(data) {
        data = data || {};
        return $.ajax({
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            url: this.root + '/Photo',
            data: JSON.stringify(data)
        });
    }

    function updatePost(id, data) {
        return $.ajax({
            type: 'PUT',
            contentType: 'application/json; charset=utf-8',
            url: this.root + '/Photo/' + id,
            data: JSON.stringify(data)
        });
    }

    function deletePost(id) {
        return $.ajax({
            type: 'DELETE',
            url: this.root + '/Photo/' + id,
        });
    }

    window.service.photos = window.service || {};

    window.service.photos = service;

})();
