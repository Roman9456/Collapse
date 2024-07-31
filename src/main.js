import CollapsibleWidget from './widgets/CollapsibleWidget'; 
import './styles.css';

const collapsibleContainers = document.querySelectorAll('.collapsible-container');

collapsibleContainers.forEach((container) => {
  new CollapsibleWidget(container, {
    expandedClass: 'expanded',
    collapseClass: 'collapsed'
  });
});
