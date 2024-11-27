document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('bg-gray-900', 'text-gray-200', 'font-sans', 'overflow-x-hidden');
    const nav = document.createElement('nav');
    nav.classList.add('w-50', 'bg-gray-800', 'p-4');
    document.body.appendChild(nav);

    const navHeader = document.createElement('h1');
    navHeader.classList.add('text-2xl', 'font-bold', 'text-orange-500', 'mb-6', 'hidden', 'sm:block');
    navHeader.textContent = 'Rohan Sharma Sitoula';
    nav.appendChild(navHeader);

    const navigationUl = document.createElement('ul');
    navigationUl.classList.add('space-y-4');
    nav.appendChild(navigationUl);

    const sections = [
        { name: 'About Me', icon: '👤', section: 'about' },
        { name: 'Skills', icon: '🛠', section: 'skills' },
        { name: 'Experience', icon: '💼', section: 'experience' },
        { name: 'Education', icon: '🎓', section: 'education' },
        { name: 'Contact', icon: '📬', section: 'contact' }
    ];

    sections.forEach(section => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.classList.add('nav-btn', 'flex', 'items-center');
        button.dataset.section = section.section;

        const spanIcon = document.createElement('span');
        spanIcon.classList.add('icon-' + section.section, 'block', 'text-orange-500', 'mr-2');
        spanIcon.textContent = section.icon;
        button.appendChild(spanIcon);

        const spanText = document.createElement('span');
        spanText.classList.add('hidden', 'sm:block');
        spanText.textContent = section.name;
        button.appendChild(spanText);

        button.addEventListener('click', () => {
            loadSection(section.section);
        });

        li.appendChild(button);
        navigationUl.appendChild(li);
    });

    const flexArea = document.createElement('div');
    flexArea.classList.add('flex-1', 'p-6', 'overflow-x-scroll');
    document.body.appendChild(flexArea);

    const inputArea = document.createElement('div');
    inputArea.id = 'input-area';
    inputArea.classList.add('mb-4');
    flexArea.appendChild(inputArea);

    const contentArea = document.createElement('div');
    contentArea.id = 'content';
    contentArea.classList.add('p-4', 'bg-gray-800', 'rounded', 'shadow-md');
    flexArea.appendChild(contentArea);

    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.classList.add('hidden', 'text-center');
    const loaderText = document.createElement('p');
    loaderText.classList.add('mt-4', 'text-gray-400');
    loaderText.textContent = 'Loading...';
    loader.appendChild(loaderText);
    flexArea.appendChild(loader);
    
    const sendButton = document.createElement('button');
    sendButton.id = 'send-btn';
    sendButton.classList.add('bg-orange-600', 'text-white', 'py-2', 'px-4', 'rounded', 'hover:bg-orange-500', 'flex-shrink-0', 'mx-auto', 'sm:ml-4', 'sm:mt-0', 'mt-4', 'w-full', 'sm:w-auto', 'text-center');
    sendButton.textContent = 'Send';
    inputArea.appendChild(sendButton);
    
    function loadSection(section) {
        const url = `https://rohansharmasitoula.me/${section}`;
        loader.classList.add("hidden");
        contentArea.classList.add("hidden");

        // Simulate typing and loading
        typeURL(url, () => {
            sendButton.onclick = () => {
                sendButton.classList.add("bg-orange-700");
                loader.classList.remove("hidden");
                fetch(`${section}.html`)
                    .then(response => response.text())
                    .then(html=> {
                        loader.classList.add("hidden");
                        contentArea.innerHTML = html;
                        contentArea.classList.remove("hidden");
                        sendButton.classList.remove("bg-orange-700");
                    });
            };

            sendButton.click();
        });
    }

    function typeURL(url, callback) {
        let i = 0;
        const interval = setInterval(() => {
            if (i < url.length) {
                contentArea.textContent += url[i];
                i++;
            } else {
                clearInterval(interval);
                callback();
            }
        }, 30);
    }
});