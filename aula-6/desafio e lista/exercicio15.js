class Musica {
    constructor(titulo, artista, duracao) {
      this.titulo = titulo;
      this.artista = artista;
      this.duracao = duracao;
    }
  }
  
  class Playlist {
    constructor(nome) {
      this.nome = nome;
      this.musicas = [];
    }
  
    adicionarMusica(musica) {
      this.musicas.push(musica);
      console.log(`Música "${musica.titulo}" adicionada à playlist "${this.nome}".`);
    }
  
    reproduzir() {
      console.log(`Reproduzindo a playlist "${this.nome}":`);
      this.musicas.forEach((musica, index) => {
        console.log(`${index + 1}. ${musica.titulo} - ${musica.artista} (${musica.duracao} minutos)`);
      });
    }
  }
  
  class Usuario {
    constructor(nome) {
      this.nome = nome;
      this.bibliotecaMusical = new BibliotecaMusical();
      this.playlists = [];
    }
  
    criarPlaylist(nome) {
      const playlist = new Playlist(nome);
      this.playlists.push(playlist);
      console.log(`Playlist "${nome}" criada por ${this.nome}.`);
      return playlist;
    }
  
    adicionarMusicaNaBiblioteca(musica) {
      this.bibliotecaMusical.adicionarMusica(musica);
      console.log(`Música "${musica.titulo}" adicionada à biblioteca de ${this.nome}.`);
    }
  }
  
  class BibliotecaMusical {
    constructor() {
      this.musicas = [];
    }
  
    adicionarMusica(musica) {
      this.musicas.push(musica);
      console.log(`Música "${musica.titulo}" adicionada à biblioteca.`);
    }
  }
  
  // Exemplo de uso:
  
  // Criar algumas músicas
  const musica1 = new Musica('Song 1', 'Artist 1', 3.5);
  const musica2 = new Musica('Song 2', 'Artist 2', 4.2);
  const musica3 = new Musica('Song 3', 'Artist 3', 2.8);
  
  // Criar um usuário
  const usuario1 = new Usuario('Usuario1');
  
  // Adicionar músicas à biblioteca do usuário
  usuario1.adicionarMusicaNaBiblioteca(musica1);
  usuario1.adicionarMusicaNaBiblioteca(musica2);
  
  // Criar uma playlist e adicionar músicas a ela
  const playlist1 = usuario1.criarPlaylist('Playlist 1');
  playlist1.adicionarMusica(musica1);
  playlist1.adicionarMusica(musica2);
  playlist1.adicionarMusica(musica3);
  
  // Reproduzir a playlist
  playlist1.reproduzir();
  