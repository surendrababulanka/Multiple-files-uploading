
document.getElementById('file-upload').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
  const files = event.target.files;
  const fileList = document.getElementById('file-list');

  fileList.innerHTML = '';

  for (let i = 0; i < files.length; i++) {
    const li = document.createElement('li');
    li.classList.add('file-item');

    const fileInfo = document.createElement('div');
    fileInfo.classList.add('file-info');

    const icon = document.createElement('i');
    icon.classList.add('fa', 'fa-file');
    icon.style.color = 'white'; 
    fileInfo.appendChild(icon);

    const fileName = document.createElement('div');
    fileName.classList.add('file-name');
    fileName.textContent = files[i].name;
    fileInfo.appendChild(fileName);

    const fileSize = document.createElement('div');
    fileSize.classList.add('file-size');
    fileSize.textContent = formatFileSize(files[i].size);
    fileInfo.appendChild(fileSize);

    li.appendChild(fileInfo);
    fileList.appendChild(li);
  }
}

function formatFileSize(size) {
  if (size === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(size) / Math.log(k));
  return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}