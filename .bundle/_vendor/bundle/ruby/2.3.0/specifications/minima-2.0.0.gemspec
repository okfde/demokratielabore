# -*- encoding: utf-8 -*-
# stub: minima 2.0.0 ruby lib

Gem::Specification.new do |s|
  s.name = "minima"
  s.version = "2.0.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.metadata = { "plugin_type" => "theme" } if s.respond_to? :metadata=
  s.require_paths = ["lib"]
  s.authors = ["Joel Glovier"]
  s.bindir = "exe"
  s.date = "2016-10-06"
  s.email = ["jglovier@github.com"]
  s.homepage = "https://github.com/jekyll/minima"
  s.licenses = ["MIT"]
  s.post_install_message = "\n----------------------------------------------\nThank you for installing minima 2.0!\n\nMinima 2.0 comes with a breaking change that\nrenders '<your-site>/css/main.scss' redundant.\nThat file is now bundled with this gem as\n'<minima>/assets/main.scss'.\n\nMore Information:\nhttps://github.com/jekyll/minima#customization\n----------------------------------------------\n\n"
  s.rubygems_version = "2.5.1"
  s.summary = "A beautiful, minimal theme for Jekyll. NOT DONE YET."

  s.installed_by_version = "2.5.1" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<jekyll>, ["~> 3.2"])
      s.add_development_dependency(%q<bundler>, ["~> 1.12"])
      s.add_development_dependency(%q<rake>, ["~> 10.0"])
    else
      s.add_dependency(%q<jekyll>, ["~> 3.2"])
      s.add_dependency(%q<bundler>, ["~> 1.12"])
      s.add_dependency(%q<rake>, ["~> 10.0"])
    end
  else
    s.add_dependency(%q<jekyll>, ["~> 3.2"])
    s.add_dependency(%q<bundler>, ["~> 1.12"])
    s.add_dependency(%q<rake>, ["~> 10.0"])
  end
end
