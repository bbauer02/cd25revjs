function zip(n, m) {
    // meme dimension error first
    if (n.length != m.length) throw new Error('Erreur de dimension');

    // zip les éléments 
    let z = [];
    for (let i = 0; i < n.length; i++) z.push([n[i], m[i]]);

    return z;
}


try {
    console.log(zip([1, 2], [3, 4]));
    console.log(zip([1, 2, 8], [3, 4]));

} catch (e) {

    console.log(e.message);
}