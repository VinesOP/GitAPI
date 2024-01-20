$(document).ready(function () {
    const username = 'VinesOP';
    const perPage = 10;
    let currentPage = 1;

    // Function to show loader
    function showLoader() {
        $('#loader').show();
    }

    // Function to hide loader
    function hideLoader() {
        $('#loader').hide();
    }

    // Function to update pagination buttons
    function updatePaginationButtons(repoCount) {
        const prevPage = $('#prevPage');
        const nextPage = $('#nextPage');

        if (currentPage === 1) {
            prevPage.addClass('disabled');
        } else {
            prevPage.removeClass('disabled');
        }

        if (repoCount < perPage) {
            nextPage.addClass('disabled');
        } else {
            nextPage.removeClass('disabled');
        }
    }

    // Function to display repositories
    function displayRepositories(repositories) {
        const repoList = $('#repoList');
        repoList.empty();

        repositories.forEach(repo => {
            const listItem = `<li class="list-group-item">${repo.name}</li>`;
            repoList.append(listItem);
        });
    }

    // Function to fetch repositories from GitHub API
    function fetchRepositories(page) {
        // Show loader
        showLoader();

        // GitHub API endpoint
        const apiUrl = `https://api.github.com/users/${username}/repos?per_page=${perPage}&page=${page}`;

        // Fetch data as JSON
        $.ajax({
            url: apiUrl,
            dataType: 'json',
            success: function (data) {
                // Hide loader
                hideLoader();

                // Display repositories
                displayRepositories(data);

                // Enable/disable pagination buttons
                updatePaginationButtons(data.length);
            },
            error: function () {
                // Handle API call failure (e.g., show an error message)
                hideLoader();
                console.error('Failed to fetch repositories.');
            }
        });
    }

    // Event listener for pagination buttons
    $('#prevPage, #nextPage').on('click', function () {
        if ($(this).hasClass('disabled')) {
            return;
        }

        if ($(this).attr('id') === 'prevPage') {
            currentPage--;
        } else {
            currentPage++;
        }

        fetchRepositories(currentPage);
    });

    // Initial fetch
    fetchRepositories(currentPage);
});
