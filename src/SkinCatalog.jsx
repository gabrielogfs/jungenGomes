import NavBar from './NavBar';
import ItemRender from './itemRender';
import ItemRend from './Skinapi';
import "./SkinCatalog.css"

function SkinCatalog() {
  return (
    <div>
      <NavBar />
      <ItemRender />
      {/* <ItemRend />  - API for skins visualization*/}  
    </div>
  );
}

export default SkinCatalog
