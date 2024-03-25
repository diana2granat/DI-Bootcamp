#Part 1:

import psycopg2
import config
from menu_item import MenuItem
from menu_manager import MenuManager

try:

    conn = psycopg2.connect(
        dbname = config.DATABASE,
        user = config.USERNAME,
        password = config.PASSWORD,
        host = config.HOSTNAME,
        port = config.PORT
    )

    cursor = conn.cursor()
    
    # item = MenuItem('Burger', 35)
    # item.save(cursor)
    # item.delete(cursor)
    # item.update(cursor,'Veggie Burger', 37)
    item2 = MenuManager.get_by_name(cursor,'Crispy Salmon')
    # Retrieve all items
    all_items = MenuManager.all(cursor)
    for item in all_items:
        print(item)

    conn.commit()

except Exception as e:
    print(f"Error: {e}")

finally:
    if conn:
        cursor.close()
        conn.close()