const sharp = require('sharp');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const sourceDir = 'c:\\Users\\Jhony\\Desktop\\dona\\public\\criativos dona rosa';
const publicImagesDir = 'c:\\Users\\Jhony\\Desktop\\dona\\public\\images';
const publicVideosDir = 'c:\\Users\\Jhony\\Desktop\\dona\\public\\videos';

// Arquivos encontrados
const imageSource = path.join(sourceDir, 'Gemini_Generated_Image_5i9j865i9j865i9j.png');
const videoSource = path.join(sourceDir, 'Create_a_second_food_commer.mp4');

async function optimizeImage() {
  console.log('🖼️  Otimizando imagem...');
  
  const outputPath = path.join(publicImagesDir, 'dona-rosa.webp');
  
  try {
    await sharp(imageSource)
      .resize(1600, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality: 75 })
      .toFile(outputPath);
    
    const stats = fs.statSync(outputPath);
    console.log(`✅ Imagem otimizada: ${(stats.size / 1024).toFixed(2)} KB`);
    return stats.size;
  } catch (error) {
    console.error('❌ Erro ao otimizar imagem:', error);
    throw error;
  }
}

function execPromise(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) reject(error);
      else resolve(stdout);
    });
  });
}

async function optimizeVideo() {
  console.log('🎬 Otimizando vídeo...');
  
  const mp4Output = path.join(publicVideosDir, 'dona-rosa-bolo.mp4');
  const webmOutput = path.join(publicVideosDir, 'dona-rosa-bolo.webm');
  const posterOutput = path.join(publicImagesDir, 'dona-rosa-poster.webp');
  
  try {
    // Comprimir para MP4 (H.264, 720p, ~1.5Mbps, sem áudio)
    console.log('  - Criando MP4...');
    await execPromise(`ffmpeg -i "${videoSource}" -vf "scale=-2:720" -c:v libx264 -b:v 1.5M -maxrate 1.5M -bufsize 3M -an -movflags +faststart "${mp4Output}"`);
    
    const mp4Stats = fs.statSync(mp4Output);
    console.log(`  ✅ MP4 criado: ${(mp4Stats.size / 1024 / 1024).toFixed(2)} MB`);
    
    // Comprimir para WebM (VP9, 720p, ~1.5Mbps)
    console.log('  - Criando WebM...');
    await execPromise(`ffmpeg -i "${videoSource}" -vf "scale=-2:720" -c:v libvpx-vp9 -b:v 1.5M -maxrate 1.5M -bufsize 3M -an "${webmOutput}"`);
    
    const webmStats = fs.statSync(webmOutput);
    console.log(`  ✅ WebM criado: ${(webmStats.size / 1024 / 1024).toFixed(2)} MB`);
    
    // Extrair poster (frame em 1 segundo)
    console.log('  - Criando poster...');
    const tempPoster = posterOutput + '.tmp';
    await execPromise(`ffmpeg -i "${videoSource}" -ss 00:00:01 -vframes 1 -vf "scale=1280:-2" "${tempPoster}"`);
    
    // Otimizar poster com sharp
    await sharp(tempPoster)
      .webp({ quality: 70 })
      .toFile(posterOutput);
    
    // Remover arquivo temporário
    fs.unlinkSync(tempPoster);
    
    const posterStats = fs.statSync(posterOutput);
    console.log(`  ✅ Poster criado: ${(posterStats.size / 1024).toFixed(2)} KB`);
    
    return {
      mp4: mp4Stats.size,
      webm: webmStats.size,
      poster: posterStats.size
    };
  } catch (error) {
    console.error('❌ Erro ao otimizar vídeo:', error);
    throw error;
  }
}

async function main() {
  console.log('🚀 Iniciando otimização de mídias...\n');
  
  try {
    const imageSize = await optimizeImage();
    console.log();
    
    const videoSizes = await optimizeVideo();
    console.log();
    
    console.log('📊 RESUMO:');
    console.log(`  - Imagem: ${(imageSize / 1024).toFixed(2)} KB`);
    console.log(`  - Vídeo MP4: ${(videoSizes.mp4 / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  - Vídeo WebM: ${(videoSizes.webm / 1024 / 1024).toFixed(2)} MB`);
    console.log(`  - Poster: ${(videoSizes.poster / 1024).toFixed(2)} KB`);
    console.log('\n✅ Otimização concluída!');
  } catch (error) {
    console.error('\n❌ Erro na otimização:', error);
    process.exit(1);
  }
}

main();
