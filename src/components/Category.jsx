import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <div className='recipe__categories'>
        <NavLink className='recipe__categories-link' to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4 className='recipe__categories-title'>
                Italian
            </h4>
        </NavLink>
        <NavLink className='recipe__categories-link' to={'/cuisine/American'}>
            <FaHamburger/>
            <h4 className='recipe__categories-title'>
                American
            </h4>
        </NavLink>
        <NavLink className='recipe__categories-link' to={'/cuisine/Thai'}>
            <GiNoodles/>
            <h4 className='recipe__categories-title'>
                Thai
            </h4>
        </NavLink>
        <NavLink className='recipe__categories-link' to={'/cuisine/Japanese'}>
            <GiChopsticks/>
            <h4 className='recipe__categories-title'>
                Japanese
            </h4>
        </NavLink>
    </div>
  )
}

export default Category