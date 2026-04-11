import { gameStatus } from "./GameCard";

/**
 * Constructs a larger representation of a game to indicate its selection.
 * @param {Object} game the game selected by the user.
 * @returns {JSX.Element} large card representation of the user's chosen game.
 */
const ChosenGame = ({ game }) => {
  return (
    <div className='selectedContainer'>
      <div className='selectedGame'>

        {/* Period/Time Remaining */}
        <div className='headerR'>
          <h2 className='gameHeader'>{gameStatus(game)}</h2>
        </div>
        
        {/* Teams and Score */}
        <div className='scoreR'>
          <div className='teamC'>
            <img className='teamLogo' style={{height: '150px', width: '150px'}} src={`https://assets.nhle.com/logos/nhl/svg/${game.home.abbrev}_light.svg`} alt="Home Logo" />
            <h2 className='teamDisplay'>{game.home.name}</h2>
          </div>
          
          <div>
            <h1 className='scoreDisplay'>{game.home.score} - {game.away.score}</h1>
          </div>

          <div className='teamC'>
            <img className='teamLogo' style={{height: '150px', width: '150px'}} src={`https://assets.nhle.com/logos/nhl/svg/${game.away.abbrev}_light.svg`} alt="Away Logo"/>
            <h2 className='teamDisplay'>{game.away.name}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChosenGame;