'use strict';
(function() {

    var service = {
        root: 'https://jsonplaceholder.typicode.com',
        getPhotos: getPhotos,
        createPhoto: createPhoto,
        updatePhoto: updatePhoto,
        deletePhoto: deletePhoto
    };


    function getPhoto(photoId) {
        return $.ajax({
            type: 'GET',
            dataType: 'json',
            url: this.root + '/photos?_limit=2'
        });
    }

    function getPhotos(photoId) {
        return $.ajax({
            type: 'GET',
            dataType: 'json',
            url: this.root + '/photos?_limit=2',
        });

    }

    function createPhoto(data) {
        return $.ajax({
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            url: this.root + '/photos',
            data: JSON.stringify(data)
        });
    }

    function updatePhoto(id, data) {
        data = data || {};
        return $.ajax({
            type: 'PUT',
            contentType: 'application/json; charset=utf-8',
            url: this.root + '/photos/' + id,
            data: JSON.stringify(data)
        });
    }

    function deletePhoto(id) {
        return $.ajax({
            type: 'DELETE',
            url: this.root + '/photos/' + id
        });
    }


    //contexto global
    window.service = window.service || {};
    window.service.photo = service;

})()
