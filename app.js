        // Smooth scrolling to contact details
        document.querySelectorAll('.contact-details a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Add a new skill dynamically
        const newSkill = 'Data Visualization';
        const skillsList = document.getElementById('skills-list');
        const newSkillItem = document.createElement('p');
        newSkillItem.textContent = newSkill;
        skillsList.appendChild(newSkillItem);