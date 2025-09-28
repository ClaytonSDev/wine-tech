import org.springframework.context.annotation.Configuration;
import jakarta.annotation.PostConstruct;
import io.github.cdimascio.dotenv.Dotenv;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Configuration
public class EnvLoader {

    private static final Logger logger = LoggerFactory.getLogger(EnvLoader.class);

    @PostConstruct
    public void loadEnv() {
        try {
            Dotenv dotenv = Dotenv.configure()
                    .filename(".env")
                    .ignoreIfMissing()
                    .load();

            dotenv.entries().forEach(entry -> {
                System.setProperty(entry.getKey(), entry.getValue());
                logger.info("Variável carregada: {}", entry.getKey());
            });

        } catch (Exception e) {
            logger.error("Erro ao carregar .env", e);
        }

        logger.info("JWT carregado: {}", System.getProperty("JWT_SECRET"));
    }
}