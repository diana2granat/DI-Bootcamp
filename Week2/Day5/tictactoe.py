# Instructions

#     The game is played on a grid that’s 3 squares by 3 squares.
#     Players take turns putting their marks (O or X) in empty squares.
#     The first player to get 3 of their marks in a row (up, down, across, or diagonally) is the winner.
#     When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie.

# Hint
# To do this project, you basically need to create four functions:

#     display_board() – To display the Tic Tac Toe board (GUI).
#     player_input(player) – To get the position from the player.
#     check_win() – To check whether there is a winner or not.
#     play() – The main function, which calls all the functions created above.

# Note: The 4 functions above are just an example. You can implement many more helper functions or choose a completely different appoach if you want.

# Tips : Consider the following:

#     What functionality will need to accur every turn to make this program work?
#     After contemplating the question above, think about splitting your code into smaller pieces (functions).
#     Remember to follow the single responsibility principle! each function should do one thing and do it well!
#==================================================answer==============================================================================

matrix = [
    [' ', '|', ' ', '|', ' '],
    ['-', '|', '-', '|', '-'],
    [' ', '|', ' ', '|', ' '],
    ['-', '|', '-', '|', '-'],
    [' ', '|', ' ', '|', ' '],
]

winning_combinations = [
    [(0, 0), (0, 2), (0, 4)],  # Top row
    [(2, 0), (2, 2), (2, 4)],  # Middle row
    [(4, 0), (4, 2), (4, 4)],  # Bottom row
    [(0, 0), (2, 0), (4, 0)],  # Left column
    [(0, 2), (2, 2), (4, 2)],  # Middle column
    [(0, 4), (2, 4), (4, 4)],  # Right column
    [(0, 0), (2, 2), (4, 4)],  # Main diagonal
    [(0, 4), (2, 2), (4, 0)]   # Anti-diagonal
]

player1 = 'X'
player2 = 'O'

def display_board(matrix):
    for row in matrix:
        print(" ".join(row))

def player_input(player, matrix):
    row = int(input(f'Player {player} - Which row do you choose: '))
    column = int(input(f'Player {player} - Which column do you choose: '))
    if matrix[row][column] == ' ':
        matrix[row][column] = player
        return matrix
    else:
        print('The spot is taken, try again.')
        return player_input(player, matrix)

def check_win(player, matrix, winning_combinations, game_end):
    for combination in winning_combinations:  # Check each winning combination
        if all(matrix[row][col] == player for row, col in combination):
            print(f'{player} is a winner!')
            game_end = 'winner'
            return game_end  # Return immediately if winner found
    # If no winner found after checking all combinations, check for draw
    if all(cell != ' ' for row in matrix for cell in row) and game_end != 'winner':
        game_end = 'draw'
        print('This is a draw')
    return game_end


def play(matrix, player):
    game_end = None  # Initialize game_end variable
    while True:
        display_board(matrix)
        matrix = player_input(player, matrix)
        game_end = check_win(player, matrix, winning_combinations, game_end)
        if game_end == 'draw' or game_end == 'winner':
            display_board(matrix)
            break
        else:
            player = player2 if player == player1 else player1
    return game_end


play(matrix,player1)