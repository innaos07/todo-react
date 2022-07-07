import './css/Nav.css';
import {NavLink, useSearchParams} from 'react-router-dom';


function Nav() {

    const [searchParams, setSearchParams] = useSearchParams();
    const statusFilter = searchParams.get('filter');

    const linkElement = [
        {
            name: 'All',
            id: Math.random().toString(36).substr(3),
            pass: "/", 
            status: !statusFilter ? 'todo__nav-link--active' : '',
        
        },

        {
            name: 'Active',
            id: Math.random().toString(36).substr(3),
            pass: "/?filter=active",
            status: statusFilter === 'active' ? 'todo__nav-link--active' : '',
        },

        {
            name: 'Complete',
            id: Math.random().toString(36).substr(3),
            pass: "/?filter=complete",
            status: statusFilter === 'complete' ? 'todo__nav-link--active' : '', 
        },

    ]
    console.log(linkElement)

    return (
        <nav className='todo__nav-list'>
            {linkElement.map((item)=> { 
                return (
                    <NavLink key={item.id} to={item.pass} className={`todo__nav-link ${item.status}`}>{item.name} </NavLink>
                )
            })}
        </nav>
    )
}

export default Nav;