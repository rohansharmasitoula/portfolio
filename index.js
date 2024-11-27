document.addEventListener('DOMContentLoaded', function() {
    const init = () => {
        const body = document.querySelector('body');
        body.classList.add('bg-gray-900', 'text-gray-200','font-sans', 'overflow-x-hidden');
        const nav = document.createElement('nav');
        nav.className = 'w-50 bg-gray-800 p-4';
        body.appendChild(nav);

        const title = document.createElement('h1');
        title.className = 'text-2xl font-bold text-orange-500 mb-6 hidden sm:block';
        title.textContent = 'Rohan Sharma Sitoula';
        nav.appendChild(title);

        const ul = document.createElement('ul');
        ul.className = 'space-y-4';
        nav.appendChild(ul);

        const sectionsArray = ['about', 'skills', 'experience', 'education', 'contact'];
        const iconsArray = ['👤', '🛠', '💼', '🎓', '📬'];
        sectionsArray.forEach((section, index) => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.className = `nav-btn flex items-center`;
            button.dataset.section = section;
            const spanIcon = document.createElement('span');
            spanIcon.className = 'block text-orange-500 mr-2';
            spanIcon.textContent = iconsArray[index];
            const spanText = document.createElement('span');
            spanText.className = 'hidden sm:block';
            spanText.textContent = `${sectionsArray[index].charAt(0).toUpperCase() + sectionsArray[index].slice(1)}`;
            
            button.appendChild(spanIcon);
            button.appendChild(spanText);
            li.appendChild(button);
            ul.appendChild(li);

            button.addEventListener('click', () => {
                loadSection(section);
            });
        });

        const contentArea = document.createElement('div');
        contentArea.className = 'flex-1 p-6 overflow-x-scroll';
        body.appendChild(contentArea);
    };

    const sendWhatsAppMessage = () => {
        const messageInput = document.getElementById('message');
        if (messageInput) {
            const message = encodeURIComponent(messageInput.value);
            const whatsappUrl = `https://wa.me/917866857257?text=${message}`;
            if (message) {
                window.open(whatsappUrl, '_blank');
            } else {
                alert('Please enter a message to send.');
            }
        }
    };

    const switchTab = (tab, section) => {
        const previewContent = document.getElementById(`${section}-preview`);
        const rawContent = document.getElementById(`${section}-raw`);
        if (tab === 'preview') {
            previewContent.style.display = 'block';
            rawContent.style.display = 'none';
        } else if (tab === 'raw') {
            previewContent.style.display = 'none';
            rawContent.style.display = 'block';
        }
    };

    init();
});