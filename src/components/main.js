import { ListItem } from './itemsList';

const Main = ({ items, handleCheck, handleDelete }) => {

    return (
        ((items.length) ? (
            <ListItem
                key = {items.id}
                items={items}
                handleDelete={handleDelete}
                handleCheck={handleCheck}
            />
        ) : (
            <div class='main-container d-flex justify-content-center align-items-center'>
                <h4>Your list item is empty</h4>
            </div>
        ))
    )
}

export default Main;