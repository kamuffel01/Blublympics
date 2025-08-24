// Navigation
    const sections = ["home","games","scores"];
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = link.getAttribute('href').substring(1);
        sections.forEach(id => {
          document.getElementById(id).style.display = (id === target) ? 'block' : 'none';
          if(id === 'home') document.getElementById(id).style.display = (target === 'home') ? 'block' : 'none';
        });
      });
    });

    // Scoreboard
    function updateScores() {
      const rows = document.querySelectorAll('#scoreTable tr');
      rows.forEach((row, index) => {
        if(index === 0) return; // skip header
        let inputs = row.querySelectorAll('input[type="number"]');
        let total = 0;
        inputs.forEach(inp => total += parseInt(inp.value || 0));
        row.querySelector('.total').textContent = total;
      });
    }

    function addRow() {
      const table = document.getElementById('scoreTable');
      const row = table.insertRow();
      let cell1 = row.insertCell(0);
      cell1.innerHTML = '<input type="text" placeholder="Name">';
      for(let i=0;i<3;i++) {
        let cell = row.insertCell(i+1);
        cell.innerHTML = '<input type="number" value="0" onchange="updateScores()">';
      }
      let cellTotal = row.insertCell(4);
      cellTotal.className = 'total';
      cellTotal.textContent = '0';
    }
