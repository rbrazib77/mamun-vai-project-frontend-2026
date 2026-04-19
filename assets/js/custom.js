// Mobile menu
      
      /* OFF-CANVAS */
      const hamburgerBtn = document.getElementById("hamburgerBtn");
      const offcanvasMenu = document.getElementById("offcanvasMenu");
      const overlay = document.getElementById("overlay");
      const closeBtn = document.getElementById("closeBtn");
      const openMenu = () => {
        offcanvasMenu.classList.add("open");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
      };
      const closeMenu = () => {
        offcanvasMenu.classList.remove("open");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      };
      hamburgerBtn.addEventListener("click", openMenu);
      closeBtn.addEventListener("click", closeMenu);
      overlay.addEventListener("click", closeMenu);
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
      });

      /* MOBILE LEVEL-1 ACCORDION */
      document.querySelectorAll(".mob-lv1").forEach((btn) => {
        const sub = btn.nextElementSibling;
        if (!sub || !sub.classList.contains("mob-sub1")) return;
        btn.addEventListener("click", () => {
          const wasOpen = sub.classList.contains("open");
          document.querySelectorAll(".mob-sub1.open").forEach((el) => {
            el.classList.remove("open");
            el.previousElementSibling.classList.remove("open");
          });
          if (!wasOpen) {
            sub.classList.add("open");
            btn.classList.add("open");
          }
        });
      });

      /* MOBILE LEVEL-2 ACCORDION */
      document.querySelectorAll(".mob-lv2").forEach((btn) => {
        const sub = btn.nextElementSibling;
        if (!sub || !sub.classList.contains("mob-sub2")) return;
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const wasOpen = sub.classList.contains("open");
          btn
            .closest(".mob-sub1")
            .querySelectorAll(".mob-sub2.open")
            .forEach((el) => {
              el.classList.remove("open");
              el.previousElementSibling.classList.remove("open");
            });
          if (!wasOpen) {
            sub.classList.add("open");
            btn.classList.add("open");
          }
        });
      });
   

// backToTop Btn
      const btn = document.getElementById("backToTop");

      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          btn.classList.add("show");
        } else {
          btn.classList.remove("show");
        }
      });

      btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

// Swiper Js
      
      const swiper = new Swiper(".providers-swiper", {
        loop: true,
        grabCursor: true,
        spaceBetween: 24,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          prevEl: "#provPrev",
          nextEl: "#provNext",
        },
        breakpoints: {
          0: { slidesPerView: 1, spaceBetween: 16 },
          480: { slidesPerView: 1.3, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          900: { slidesPerView: 3, spaceBetween: 24 },
          1200: { slidesPerView: 4, spaceBetween: 24 },
        },
      });
   
 