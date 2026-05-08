 // ========================================
    // 1. ყველა საჭირო ელემენტის მოძებნა
    // ========================================
    
    // ყველა navigation link (.nav-link class-ით)
    const navLinks = document.querySelectorAll('.nav-link');
    
    // ყველა dropdown content (.drop-down class-ით)
    const dropdowns = document.querySelectorAll('.drop-down');

    // ========================================
    // 2. თითოეულ navigation link-ს ვამატებთ hover event listener
    // ========================================
    
    navLinks.forEach(link => {
      
      // mouseenter = როცა მაუსი შედის link-ის ტერიტორიაზე
      link.addEventListener('mouseenter', () => {
        
        // ========================================
        // 3. პირველ რიგში ყველა link-ის "active" class-ს მოვშორებით
        // ეს საჭიროა რომ ყოველთვის მხოლოდ 1 link იყოს active
        // ========================================
        navLinks.forEach(l => l.classList.remove('active'));
        
        // ========================================
        // 4. მიმდინარე link-ს ვამატებთ "active" class-ს
        // ეს გვიჩვენებს რომელ link-ზე ვართ hover-ში (მწვანე ფერი)
        // ========================================
        link.classList.add('active');
        
        // ========================================
        // 5. ვიღებთ data-dropdown attribute-ს მიმდინარე link-იდან
        // მაგალითად: თუ "Store"-ზე hover გავაკეთეთ → dropdownIndex = "0"
        // ========================================
        const dropdownIndex = link.dataset.dropdown;
        
        // ========================================
        // 6. ყველა dropdown-ის "active" class-ს მოვშორებით
        // ეს ამალავს ყველა კონტენტს
        // ========================================
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('active');
        });
        
        // ========================================
        // 7. ვეძებთ იმ dropdown-ს რომელსაც შეესაბამება მიმდინარე link
        // ვიყენებთ attribute selector-ს [data-dropdown-id="..."]
        // ========================================
        const targetDropdown = document.querySelector(
          `[data-dropdown-id="${dropdownIndex}"]`
        );
        
        // ========================================
        // 8. თუ ასეთი dropdown მოიძებნა, ვამატებთ "active" class-ს
        // ეს გახდის მას ხილულს და იმავე ადგილზე გამოჩნდება
        // ========================================
        if (targetDropdown) {
          targetDropdown.classList.add('active');
        }
      });
    });
