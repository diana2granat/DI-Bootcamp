class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self, cursor):
        query = f'''
        INSERT INTO menuitems (item_name, item_price)
        VALUES ('{self.name}', {self.price})
        '''
        cursor.execute(query)

    def delete(self, cursor):
        query = f'''
        DELETE FROM menuitems
        WHERE item_name = '{self.name}'
        '''
        cursor.execute(query)

    def update(self, cursor, new_name, new_price):
        query = f'''
        UPDATE menuitems
        SET item_name = '{new_name}', item_price = {new_price}
        WHERE item_name = '{self.name}'
        '''
        cursor.execute(query)
        self.name = new_name
        self.price = new_price