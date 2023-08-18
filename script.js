$(document).on('click', '.navbar-collapse.show', function (e) {
    if ($(e.target).is('a.dropdown-toggle')) {
        $(this).collapse('hide');
    }
});

// Use jQuery for the scroll event
$(window).on('scroll', function () {
    myFunction();
});

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

$(document).ready(function () {
    if ($(window).width() < 992) {
        $('.navbar-nav .nav-item.dropdown').click(function () {
            $(this).find('.dropdown-menu').stop(true, true).fadeToggle(200);
        });
    }

    // Use jQuery to handle the click event and collapse behavior
    $(document).on('click', '.navbar-collapse.show', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') !== 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });

    // Use jQuery to handle the click event for the dropdown-toggle
    $('.dropdown-toggle').on('click', function () {
        $(this).parent().toggleClass('show');
    });

    // Use jQuery to close the dropdown when clicking outside
    $(document).on('click', function (e) {
        var target = e.target;
        if (!$(target).is('.navbar-nav')) {
            $('.navbar-collapse').collapse('hide');
        }
    });
});



$(document).ready(function () {
    // Function to update URL hash based on active section
    function updateURLHash() {
        var sections = ['experience', 'education-skill', 'academicProjects', 'programming-scholarship', 'research', 'affiliation-extra'];
        for (var i = 0; i < sections.length; i++) {
            var section = $('#' + sections[i]);
            if (section.length && isElementInViewport(section[0])) {
                history.replaceState(null, null, '#' + sections[i]);
                break;
            }
        }
    }

    // Check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Update URL hash on scroll
    $(window).on('scroll', updateURLHash);

    // Update URL hash on page load
    updateURLHash();
});