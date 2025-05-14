function filterAndExtractProjects(projects) {
  return projects
    //.filter(project => !project.archived) // Filtrar proyectos donde 'archived' es false
    .map(project => ({
      id: project.id,
      name: project.name,
      web_url: project.web_url,
      http_url_to_repo: project.http_url_to_repo,
      archived: project.archived,
    }));
}

module.exports = { filterAndExtractProjects };
