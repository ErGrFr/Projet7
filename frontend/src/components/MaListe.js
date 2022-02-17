const laListe = [
    'A',
    'B',
    'C'
]

function MaListe() {

    return(
        <ul>
            {laListe.map((lettre) =>(<li>{lettre}</li>))}
        </ul>
    )
}
export default MaListe