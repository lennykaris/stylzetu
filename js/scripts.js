/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

        document.getElementById('view-options-btn').addEventListener('click', function(event) {
            event.preventDefault();
            var colorInput = document.getElementById('color-input');
            if (colorInput.style.display === 'none' || colorInput.style.display === '') {
                colorInput.style.display = 'block';
            } else {
                colorInput.style.display = 'none';
            }
        })