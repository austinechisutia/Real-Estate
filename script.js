 const counters = document.querySelectorAll(".ttl2");

  const startCounting = (counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = Math.ceil(target / 200); // adjust speed (200 steps)

    const updateCount = () => {
      count += increment;
      if (count < target) {
        counter.textContent = count + "+";
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = target + "+"; // final value
      }
    };

    updateCount();
  };

  

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting(entry.target);
          observer.unobserve(entry.target); // run only once
        }
      });
    },
    { threshold: 0.5 } // trigger when 50% visible
  );

  counters.forEach((counter) => observer.observe(counter));


  

 const toggleBtn = document.getElementById("menu-toggle");
  const menuItems = document.getElementById("menu-items");

  toggleBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Toggle the menu
    if (menuItems.classList.contains("hidden")) {
      menuItems.classList.remove("hidden");
      toggleBtn.textContent = "Close"; // change text
    } else {
      menuItems.classList.add("hidden");
      toggleBtn.textContent = "Menu"; // back to Menu
    }
  });

  // Optional: close menu when clicking a menu item
  document.querySelectorAll("#menu-items a").forEach(link => {
    link.addEventListener("click", () => {
      menuItems.classList.add("hidden");
      toggleBtn.textContent = "Menu";
    });
  });