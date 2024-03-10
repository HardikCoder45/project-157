AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;   
      this.createCards();
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "SuperMan",
          title: "Super-Man",
          url: "https://m.media-amazon.com/images/I/911iVOHBYnL._AC_UF1000,1000_QL80_.jpg",
        },
        {
          id: "SpiderMan",
          title: "Spider-Man",
          url: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/Amazing_Fantasy_15.jpg/228px-Amazing_Fantasy_15.jpg",
        },
  
        {
          id: "Captain Aero",
          title: "Captain-Aero",
          url: "https://th.bing.com/th/id/OIP.6Nw-usaku_tJBidlnJdo9AHaJo?rs=1&pid=ImgDetMain",
        },
        {
          id: "Outer Space",
          title: "Outer-Space",
          url: "https://m.media-amazon.com/images/I/51-iIkrhrHL._AC_UF1000,1000_QL80_.jpg",
        },
      ];
      
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id);
  
        // Thumbnail Element
        const thumbNail = this.createThumbNail(item);
        borderEl.appendChild(thumbNail);
  
        // Title Text Element
        const titleEl = this.createTitleEl(position, item);
        borderEl.appendChild(titleEl);
  
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder: function (position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 0.1,
        height:0.1
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", {
        color: "white",
        opacity: 1,
      });
  
      return entityEl;
    },
    createThumbNail: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 10,
        height:10
         
      });
      entityEl.setAttribute("material", { src: item.url });
  
      return entityEl;
    },
    createTitleEl: function (position, item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("text", {
        font: "exo2bold",
        align: "center",
        width: 70,
        color: "#e65100",
        value: item.title,
      });
      const elPosition = position;
      elPosition.y = -20;
      entityEl.setAttribute("position", elPosition);
      entityEl.setAttribute("visible", true);
      return entityEl;
    },
  });