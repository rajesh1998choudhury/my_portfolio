// Component Loader - Loads HTML components into index.html
document.addEventListener('DOMContentLoaded', function() {
    
    // List of components to load
    const components = [
        { id: 'header', file: 'components/header.html' },
        { id: 'hero', file: 'components/hero.html' },
        { id: 'about', file: 'components/about.html' },
        { id: 'skills', file: 'components/skills.html' },
        { id: 'experience', file: 'components/experience.html' },
        { id: 'projects', file: 'components/projects.html' },
        { id: 'education', file: 'components/education.html' },
        { id: 'certificates', file: 'components/certificates.html' },
        { id: 'hobbies', file: 'components/hobbies.html' },
        { id: 'blog', file: 'components/blog.html' },
        { id: 'contact', file: 'components/contact.html' },
        { id: 'footer', file: 'components/footer.html' }
    ];
    
    // Load each component
    components.forEach(component => {
        fetch(component.file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${component.file}`);
                }
                return response.text();
            })
            .then(html => {
                document.getElementById(component.id).innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading component:', error);
                document.getElementById(component.id).innerHTML = `<div style="color:red; padding:20px;">Error loading ${component.file}</div>`;
            });
    });
});