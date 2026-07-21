# frozen_string_literal: true

Jekyll::Hooks.register :site, :after_init do |site|
  libraries = site.config.fetch("third_party_libraries", {})

  if libraries["download"]
    raise "Local third-party library downloads are not supported"
  end

  replace_version = lambda do |value, version|
    case value
    when Hash
      value.transform_values! { |nested| replace_version.call(nested, version) }
    when String
      value.gsub("{{version}}", version)
    else
      value
    end
  end

  libraries.each_value do |library|
    next unless library.is_a?(Hash) && library["version"] && library["url"]

    replace_version.call(library["url"], library["version"])
  end
end
