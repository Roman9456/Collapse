class CollapsibleWidget {
    constructor(container, options = {}) {
      this.container = container;
      this.options = {
        expandedClass: 'expanded',
        collapseClass: 'collapsed',
        ...options
      };
  
      this.init();
    }
  
    init() {
      this.container.addEventListener('click', this.toggleCollapse.bind(this));
      this.setInitialState();
    }
  
    setInitialState() {
      if (this.container.classList.contains(this.options.expandedClass)) {
        this.expand();
      } else {
        this.collapse();
      }
    }
  
    toggleCollapse = () => {
      if (this.container.classList.contains(this.options.expandedClass)) {
        this.collapse();
      } else {
        this.expand();
      }
    };
  
    expand() {
      this.container.classList.remove(this.options.collapseClass);
      this.container.classList.add(this.options.expandedClass);
    }
  
    collapse() {
      this.container.classList.remove(this.options.expandedClass);
      this.container.classList.add(this.options.collapseClass);
    }
  }
  
  export default CollapsibleWidget;
  